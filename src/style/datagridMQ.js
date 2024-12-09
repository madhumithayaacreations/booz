const breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

export const getColumnWidth = (field) => {
  const widthMap = {
    wholeSalesReportsImage: {
      xs: 100,
      sm: 120,
      md: 100,
      lg: 140,
      xl: 200,
    },
    licenseProof: {
      xs: 100,
      sm: 120,
      md: 120,
      lg: 120,
      xl: 200,
    },
    wholeSalesName: {
      xs: 100,
      sm: 130,
      md: 130,
      lg: 130,
      xl: 200,
    },
    Address: {
      xs: 100,
      sm: 180,
      md: 180,
      lg: 180,
      xl: 200,
    },
    emailId: {
      xs: 100,
      sm: 150,
      md: 150,
      lg: 150,
      xl: 200,
    },
    phoneNo: {
      xs: 100,
      sm: 140,
      md: 140,
      lg: 140,
      xl: 150,
    },
    officeTimings: {
      xs: 80,
      sm: 90,
      md: 90,
      lg: 90,
      xl: 100,
    },
    actions: {
      xs: 80,
      sm: 80,
      md: 80,
      lg: 80,
      xl: 100,
    },
  };

  const screenWidth = window.innerWidth;

  if (screenWidth < breakpoints.sm) {
    return widthMap[field]?.xs || 100;
  } else if (screenWidth < breakpoints.md) {
    return widthMap[field]?.sm || 100;
  } else if (screenWidth < breakpoints.lg) {
    return widthMap[field]?.md || 100;
  } else if (screenWidth < breakpoints.xl) {
    return widthMap[field]?.lg || 100;
  } else {
    return widthMap[field]?.xl || 100;
  }
};
