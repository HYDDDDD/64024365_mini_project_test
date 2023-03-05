export const handleValidation = (customer) => {
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
  }

  return true;
};
