import { rem } from "@thi.ng/hiccup-css";
import { mix, norm } from "@thi.ng/math";
import { ratios, sizeScaleBreakpointsCss, sizeScaleRules } from "../../src";

const selectors = [
  ".bodyS",
  ".bodyM",
  ".bodyL",
  ".h6",
  ".h5",
  ".h4",
  ".h3",
  ".h2",
  ".h1",
];

export default function FontSizeRoute() {
  const styleText = sizeScaleBreakpointsCss(
    ratios.minorThird,
    ratios.perfectFourth,
    10,
    100,
    10,
    (ratio: number) => [
      ...sizeScaleRules(selectors, 0, ratio, (size) => ({
        "line-height": mix(1.2, 1, Math.min(norm(size, 1, 6.25), 1)),
        "letter-spacing": rem(mix(0, -0.1, norm(size, 1, 6.25))),
        "font-size": rem((size * 10) / 16),
      })),
      ...sizeScaleRules(
        selectors.map((selector) => `${selector}.maxWidth`),
        0,
        ratio,
        (size) => ({
          "max-width": rem(mix(25, 60, norm(size, 1, 6.25))),
        })
      ),
    ]
  );

  return (
    <div style={{ padding: ".5rem" }}>
      <style>{styleText}</style>
      <h1 class="maxWidth h1">
        Mauris non erat id libero malesuada convallis. Vestibulum id quam eu
        justo viverra elementum. Aliquam erat volutpat. Sed ultricies quam sit
        amet tellus vehicula, a egestas eros tincidunt. Curabitur varius mauris
        vitae justo pharetra, vel bibendum ligula interdum. Vivamus tristique
        augue vitae turpis aliquam, ac hendrerit ipsum tincidunt.
      </h1>
      <h2 class="maxWidth h2">
        Fusce euismod magna at lacus feugiat, nec luctus lectus consectetur.
        Quisque nec venenatis nunc. Vivamus et turpis in sapien aliquet interdum
        et a velit. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Aenean fermentum, nulla non hendrerit
        venenatis, sapien felis suscipit metus, a tincidunt ex dui at nunc.
      </h2>
      <h3 class="maxWidth h3">
        Integer nec nisl at metus malesuada tincidunt ut nec nisi. Nullam eget
        turpis ac mi tincidunt luctus et vel justo. Sed id dui et felis ultrices
        faucibus. Donec tristique diam ac nisi scelerisque, vitae feugiat nunc
        blandit. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas.
      </h3>
      <h4 class="maxWidth h4">
        Mauris non erat id libero malesuada convallis. Vestibulum id quam eu
        justo viverra elementum. Aliquam erat volutpat. Sed ultricies quam sit
        amet tellus vehicula, a egestas eros tincidunt. Curabitur varius mauris
        vitae justo pharetra, vel bibendum ligula interdum. Vivamus tristique
        augue vitae turpis aliquam, ac hendrerit ipsum tincidunt.
      </h4>
      <h5 class="maxWidth h5">
        Fusce euismod magna at lacus feugiat, nec luctus lectus consectetur.
        Quisque nec venenatis nunc. Vivamus et turpis in sapien aliquet interdum
        et a velit. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Aenean fermentum, nulla non hendrerit
        venenatis, sapien felis suscipit metus, a tincidunt ex dui at nunc.
      </h5>
      <h6 class="maxWidth h6">
        Integer nec nisl at metus malesuada tincidunt ut nec nisi. Nullam eget
        turpis ac mi tincidunt luctus et vel justo. Sed id dui et felis ultrices
        faucibus. Donec tristique diam ac nisi scelerisque, vitae feugiat nunc
        blandit. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas.
      </h6>
      <p class="maxWidth bodyL">
        Mauris non erat id libero malesuada convallis. Vestibulum id quam eu
        justo viverra elementum. Aliquam erat volutpat. Sed ultricies quam sit
        amet tellus vehicula, a egestas eros tincidunt. Curabitur varius mauris
        vitae justo pharetra, vel bibendum ligula interdum. Vivamus tristique
        augue vitae turpis aliquam, ac hendrerit ipsum tincidunt.
      </p>
      <p class="maxWidth bodyM">
        Fusce euismod magna at lacus feugiat, nec luctus lectus consectetur.
        Quisque nec venenatis nunc. Vivamus et turpis in sapien aliquet interdum
        et a velit. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Aenean fermentum, nulla non hendrerit
        venenatis, sapien felis suscipit metus, a tincidunt ex dui at nunc.
      </p>
      <p class="maxWidth bodyS">
        Integer nec nisl at metus malesuada tincidunt ut nec nisi. Nullam eget
        turpis ac mi tincidunt luctus et vel justo. Sed id dui et felis ultrices
        faucibus. Donec tristique diam ac nisi scelerisque, vitae feugiat nunc
        blandit. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas.
      </p>
    </div>
  );
}
