interface Location {
  x: number;
  y: number;
}

export default function getLocation(errHandler?: () => void) {
  if ("geolocation" in navigator) {
    return new Promise<Location>((resolve) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const {
            coords: { latitude: y, longitude: x },
          } = position;
          resolve({ x, y });
        },
        (e) => {
          alert("HTTPS 연결을 확인해주세요.");
          errHandler && errHandler();
        },
      );
    });
  }

  return { x: 126.911355, y: 37.471847 }; // 신림쌍용아파트 올람올
}
