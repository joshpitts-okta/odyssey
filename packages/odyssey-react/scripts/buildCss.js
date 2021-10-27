/*!
 * Copyright (c) 2021-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

const { createHash } = require("crypto");
const { writeFileSync } = require("fs");
const { resolve } = require("path");
const { renderSync } = require("sass");

const scssSource = [
  "abstracts/functions",
  "abstracts/colors",
  "abstracts/mixins",
  "abstracts/tokens",
  "base/reset",
  "base/typography-global",
  "base/typography-text",
];

const importDir = resolve(require.resolve("@okta/odyssey"), "..");
const scssData = scssSource
  .map((source) => `@import '${importDir}/${source}';`)
  .join("\n");

const { css } = renderSync({
  data: scssData,
  outputStyle: "compressed",
});

const cssNoComments = css
  .toString()
  .replace(/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim, "");
const digest = createHash("md5")
  .update(cssNoComments)
  .digest("hex")
  .substr(0, 6);

const cssFilePath = resolve(
  __dirname,
  "../dist",
  `odyssey-deprecated-global.${digest}.css`
);

writeFileSync(cssFilePath, cssNoComments);