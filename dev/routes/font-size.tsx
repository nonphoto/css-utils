import { rem } from "@thi.ng/hiccup-css";
import { mix, norm } from "@thi.ng/math";
import { ratios, sizeScaleBreakpointsCss, sizeScaleRules } from "../../src";

const selectors = [".p3", ".p2", ".p1", "h6", "h5", "h4", "h3", "h2", "h1"];

export default function FontSizeRoute() {
  const styleText = sizeScaleBreakpointsCss(
    ratios.minorThird,
    ratios.perfectFourth,
    20,
    100,
    10,
    (ratio: number) =>
      sizeScaleRules(selectors, 1, ratio, (size) => ({
        "line-height": mix(1.2, 0.9, norm(size, 1, 5)),
        "letter-spacing": rem(mix(0, -0.15, norm(size, 1, 5))),
        "font-size": rem(size),
        "max-width": rem(mix(30, 60, norm(size, 1, 5))),
        "margin-block-start": "1em",
      }))
  );

  return (
    <div style={{ padding: ".5rem" }}>
      <style>{styleText}</style>
      <h1>Lorem ipsum dolor sit amet</h1>
      <h2>Suspendisse potenti sed interdum</h2>
      <h3>Quisque scelerisque felis ut tristique</h3>
      <h4>Curabitur lacinia odio euismod</h4>
      <h5>Nulla convallis dolor ut metus</h5>
      <h6>Proin ut nisi in erat dictum</h6>
      <p class="p1">
        Mauris non erat id libero malesuada convallis. Vestibulum id quam eu
        justo viverra elementum. Aliquam erat volutpat. Sed ultricies quam sit
        amet tellus vehicula, a egestas eros tincidunt. Curabitur varius mauris
        vitae justo pharetra, vel bibendum ligula interdum. Vivamus tristique
        augue vitae turpis aliquam, ac hendrerit ipsum tincidunt.
      </p>
      <p class="p2">
        Fusce euismod magna at lacus feugiat, nec luctus lectus consectetur.
        Quisque nec venenatis nunc. Vivamus et turpis in sapien aliquet interdum
        et a velit. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Aenean fermentum, nulla non hendrerit
        venenatis, sapien felis suscipit metus, a tincidunt ex dui at nunc.
      </p>
      <p class="p3">
        Integer nec nisl at metus malesuada tincidunt ut nec nisi. Nullam eget
        turpis ac mi tincidunt luctus et vel justo. Sed id dui et felis ultrices
        faucibus. Donec tristique diam ac nisi scelerisque, vitae feugiat nunc
        blandit. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas.
      </p>
    </div>
  );
}
