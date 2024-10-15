import { at_media, css, em, RuleFn } from "@thi.ng/hiccup-css";
import { mix, norm } from "@thi.ng/math";
import { range } from "@thi.ng/transducers";

export type PropertyRecord = Record<string, number | string>;

export type Rule = [string, PropertyRecord];

export const ratios = {
  minorSecond: 1.067,
  majorSecond: 1.125,
  minorThird: 1.2,
  majorThird: 1.25,
  perfectFourth: 1.333,
  augmentedFourth: 1.414,
  perfectFifth: 1.5,
  golden: 1.618,
};

/**
 * Why em units? https://zellwk.com/blog/media-query-units/
 */
function breakpointRule(breakpoint: number, rules: any[]) {
  return at_media({ screen: true, "min-width": em(breakpoint) }, rules);
}

export function sizeScaleBreakpointRules(
  minRatio: number,
  maxRatio: number,
  minViewportWidth: number,
  maxViewportWidth: number,
  breakpointStep: number,
  fn: (ratio: number) => Rule[]
): (Rule[] | RuleFn)[] {
  return [...range(minViewportWidth, maxViewportWidth, breakpointStep)].map(
    (breakpoint) => {
      const t = norm(breakpoint, minViewportWidth, maxViewportWidth);
      const mappedSelectors = fn(mix(minRatio, maxRatio, t));
      return breakpoint < minViewportWidth + breakpointStep
        ? mappedSelectors
        : breakpointRule(breakpoint, mappedSelectors);
    }
  );
}

export function sizeScaleBreakpointsCss(
  ...args: Parameters<typeof sizeScaleBreakpointRules>
) {
  return css(sizeScaleBreakpointRules(...args));
}

export function sizeScaleRules(
  selectors: string[],
  zeroIndex: number,
  ratio: number,
  fn: (size: number) => PropertyRecord
): Rule[] {
  return selectors.map((selector, selectorIndex) => {
    const size = Math.pow(ratio, selectorIndex - zeroIndex);
    return [selector, fn(size)];
  });
}

export function sizeScaleCss(...args: Parameters<typeof sizeScaleRules>) {
  return css(sizeScaleRules(...args));
}
