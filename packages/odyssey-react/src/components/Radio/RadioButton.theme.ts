/*!
 * Copyright (c) 2022-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import type { ThemeReducer } from "@okta/odyssey-react-theme";

export const theme: ThemeReducer = (theme) => ({
  ColorBorder: theme.ColorBorderUi,
  ColorBorderHover: theme.ColorPrimaryBase,
  ColorBorderFocus: theme.ColorPrimaryBase,
  ColorBorderChecked: theme.ColorPrimaryBase,
  ColorBorderDisabled: theme.ColorBorderDisabled,
  ColorBorderDisabledChecked: theme.ColorPrimaryLight,
  ColorBorderInvalid: theme.ColorBorderDangerBase,
  ColorBorderInvalidHover: theme.ColorDangerDark,
  ColorBackground: "transparent",
  ColorBackgroundChecked: theme.ColorPrimaryBase,
  ColorBackgroundDisabled: theme.ColorBackgroundDisabled,
  ColorBackgroundDisabledChecked: theme.ColorPrimaryLight,
  ColorBackgroundInvalid: theme.ColorBackgroundDangerDark,
  ColorDot: theme.ColorTextBodyInverse,
  ColorFocusOutline: theme.ColorFocusPrimary,
  ColorFocusOutlineInvalid: theme.ColorFocusDanger,
  FocusOutlineWidth: theme.FocusOutlineWidthSmall,
  ColorTextDisabled: theme.ColorTextBody,
  ColorTextInvalid: theme.ColorTextDanger,
  MarginBlockEnd: theme.SpaceRemXs,
  LabelPaddingInlineStart: theme.SpaceEmS,
  FontSize: theme.FontSizeBody,
  FontWeight: theme.FontWeightNormal,
  CircleSize: "1em",
  BorderSize: "2px",
  BorderStyle: theme.BorderStyleBase,
  DotScale: 0.4,
  TransitionDuration: theme.TransitionDurationBase,
  TransitionTiming: theme.TransitionTimingBase,
});
