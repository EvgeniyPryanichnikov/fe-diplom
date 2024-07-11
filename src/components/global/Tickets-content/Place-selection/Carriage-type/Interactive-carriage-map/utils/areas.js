const OriginalImageSize = {
  WIDTH: 920,
  HEIGHT: 145,
}

export const convertToPercentage = (areas) =>
  areas.map(area => ({
    ...area,
    x: (area.x / OriginalImageSize.WIDTH) * 100,
    y: (area.y / OriginalImageSize.HEIGHT) * 100,
    width: (area.width / OriginalImageSize.WIDTH) * 100,
    height: (area.height / OriginalImageSize.HEIGHT) * 100,
  }));
