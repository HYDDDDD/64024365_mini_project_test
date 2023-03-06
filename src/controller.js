export const handleValidation = (customer,image) => {
  if (!customer?.name?.trim()) {
    console.log("กรุณากรอกชื่อของคุณ.");
    return false;
  } else if (!customer?.dormName?.trim()) {
    console.log("กรุณากรอกชื่อหอพัก.");
    return false;
  } else if (!customer?.room) {
    console.log("กรุณากรอกห้องพัก.");
    return false;
  } else if (!customer?.details?.trim()) {
    console.log("กรุณาแจ้งรายละเอียดปัญหา.");
    return false;
  } else if (image === null) {
    console.log("กรุณาอัพโหลดรูปภาพ");
    return false;
  }

  return true;
};
