export type ClusterPos = { left: string; top: string };

export const HERO_CLUSTERS = {
  desktop: [
    // ── TOP 라인  ──
    { left: "8%", top: "6%" },
    { left: "28%", top: "3%" },
    { left: "50%", top: "5%" },
    { left: "72%", top: "3%" },
    { left: "90%", top: "7%" },

    // ── LEFT 라인 ──
    { left: "2%", top: "20%" },
    { left: "0%", top: "38%" },
    { left: "2%", top: "58%" },
    { left: "4%", top: "78%" },

    // ── RIGHT 라인 ──
    { left: "76%", top: "22%" },
    { left: "80%", top: "40%" },
    { left: "78%", top: "62%" },
    { left: "74%", top: "80%" },

    // ── BOTTOM 라인 ──
    { left: "18%", top: "88%" },
    { left: "46%", top: "90%" },
    { left: "70%", top: "87%" },
  ] as ClusterPos[],

  tablet: [
    { left: "10%", top: "7%" },
    { left: "34%", top: "4%" },
    { left: "62%", top: "5%" },
    { left: "86%", top: "8%" },

    { left: "2%", top: "24%" },
    { left: "0%", top: "44%" },
    { left: "3%", top: "66%" },

    { left: "78%", top: "26%" },
    { left: "82%", top: "46%" },
    { left: "78%", top: "70%" },

    { left: "20%", top: "90%" },
    { left: "62%", top: "92%" },
  ] as ClusterPos[],

  mobile: [
    { left: "12%", top: "10%" },
    { left: "72%", top: "9%" },

    { left: "4%", top: "26%" },
    { left: "86%", top: "28%" },

    { left: "6%", top: "72%" },
    { left: "84%", top: "74%" },

    { left: "20%", top: "90%" },
    { left: "66%", top: "92%" },
  ] as ClusterPos[],

  smallMobile: [
    { left: "10%", top: "12%" },
    { left: "76%", top: "10%" },

    { left: "4%", top: "32%" },
    { left: "86%", top: "34%" },

    { left: "8%", top: "78%" },
    { left: "82%", top: "80%" },
  ] as ClusterPos[],
} as const;

export type HeroClusterKey = keyof typeof HERO_CLUSTERS;
