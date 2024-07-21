export enum USER_AGENT {
  MOBILE = 'MOBILE',
  TABLET = 'TABLET',
  DESKTOP = 'DESKTOP',
}

export function getUserAgentType(): USER_AGENT {
  if (isTabletDevice()) {
    return USER_AGENT.TABLET;
  }

  if (isMobileDevice()) {
    return USER_AGENT.MOBILE;
  }

  return USER_AGENT.DESKTOP;
}

function isMobileDevice(): boolean {
  const mobileOSAndDevicesExp = /(Android|Mobile|webOS|iPod|Opera Mini|iPhone)/gi;
  return hasTouchCapabilities() && mobileOSAndDevicesExp.test(navigator.userAgent);
}

function isTabletDevice(): boolean {
  const tabletOSAndDevicesExp = /(ipad|tablet|Macintosh|(android(?=.*mobile))|windows)/gi;
  return hasTouchCapabilities() && tabletOSAndDevicesExp.test(navigator.userAgent);
}

function hasTouchCapabilities(): boolean {
  return 'ontouchstart' in window;
}

export function isAppleDevice(): boolean {
  const tabletOSAndDevicesExp = /(ipad|iphone|Macintosh)/gi;
  return tabletOSAndDevicesExp.test(navigator.userAgent);
}
