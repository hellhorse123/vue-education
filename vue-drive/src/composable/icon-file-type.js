export const useIconFileType = (type) => {
  const iconTypes = {
    "video/mp4": "icon-type-video",
    "video/jpeg": "icon-type-image",
    "video/jpg": "icon-type-image",
    "video/png": "icon-type-image",
    "application/zip": "icon-type-zip",
    "application/msword": "icon-type-doc",
    "application/vnd.ms-excel": "icon-type-excel",
    "application/pdf": "icon-type-pdf",
  };
  return iconTypes[type] ? iconTypes[type] : "icon-type-common";
};
