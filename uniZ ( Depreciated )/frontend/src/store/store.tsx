/* eslint-disable react-refresh/only-export-components */
import { atom } from "recoil";

export const Alert = atom({
  key: "Alert",
  default: {
    Message: "",
    Display: false,
    Status: false,
  },
});

export const User = atom({
  key: "User",
  default: {
    Username: "SreeCharan",
    Email: "o210008@rguktong.ac.in",
    Id_number: "O210008",
    Branch: "CSE",
    PhoneNumber: "1234567890",
  },
});

export const ApplicationStatus = atom({
  key: "ApplicationStatus",
  default: {
    Message: "",
    isPresent: false,
  },
});

export const WaitingOutpasses = atom({
  key: "WaitingOutpasses",
  default: [
    {
      Username: "SreeCharan(Given)",
      Idno: "O210008",
      Email: "o210008@rguktong.ac.in",
      Branch: "CSE",
      Section: "CSE-1",
      RoomNo: "N-108",
      PhoneNumber: "6300625861",
      MotherNumber: "1234567890",
      FatherNumber: "1234567890",
      Pass: "Outpass",
      Reason: "Wanna go home for VinayakaChavithi",
      FromTime: "20-10-2024",
      ToTime: "22-08-2024",      isExpired : false
    },
    {
      Username: "SreeCharan",
      Idno: "O210008",
      Email: "o210008@rguktong.ac.in",
      Branch: "CSE",
      Section: "CSE-1",
      RoomNo: "N-108",
      PhoneNumber: "6300625861",
      MotherNumber: "1234567890",
      FatherNumber: "1234567890",
      Pass: "Outpass",
      Reason: "Wanna go home for VinayakaChavithi",
      FromTime: "20-10-2024",
      ToTime: "22-08-2024",      isExpired : false
    },
    {
      Username: "SreeCharan",
      Idno: "O210008",
      Email: "o210008@rguktong.ac.in",
      Branch: "CSE",
      Section: "CSE-1",
      RoomNo: "N-108",
      PhoneNumber: "6300625861",
      MotherNumber: "1234567890",
      FatherNumber: "1234567890",
      Pass: "Outpass",
      Reason: "Wanna go home for VinayakaChavithi",
      FromTime: "20-10-2024",
      ToTime: "22-08-2024",      isExpired : false
    },
    {
      Username: "SreeCharan",
      Idno: "O210008",
      Email: "o210008@rguktong.ac.in",
      Branch: "CSE",
      Section: "CSE-1",
      RoomNo: "N-108",
      PhoneNumber: "6300625861",
      MotherNumber: "1234567890",
      FatherNumber: "1234567890",
      Pass: "Outpass",
      Reason: "Wanna go home for VinayakaChavithi(hh)",
      FromTime: "20-10-2024",
      ToTime: "22-08-2024",      isExpired : true
    },
  ],
});

export const GivenPasses = atom({
  key: "GivenPasses",
  default: [
    {
      Username: "SreeCharan(Given)",
      Idno: "O210008",
      Email: "o210008@rguktong.ac.in",
      Branch: "CSE",
      Section: "CSE-1",
      RoomNo: "N-108",
      PhoneNumber: "6300625861",
      MotherNumber: "1234567890",
      FatherNumber: "1234567890",
      Pass: "Outpass",
      Reason: "Wanna go home for VinayakaChavithi",
      FromTime: "20-10-2024",
      ToTime: "22-08-2024",      isExpired : false,
      issuedBy: "issued by Dean",
    },
    {
      Username: "SreeCharan",
      Idno: "O210008",
      Email: "o210008@rguktong.ac.in",
      Branch: "CSE",
      Section: "CSE-1",
      RoomNo: "N-108",
      PhoneNumber: "6300625861",
      MotherNumber: "1234567890",
      FatherNumber: "1234567890",
      Pass: "Outpass",
      Reason: "Wanna go home for VinayakaChavithi",
      FromTime: "20-10-2024",
      ToTime: "22-08-2024",      isExpired : false,
      issuedBy: "issued by Dean",
    },
    {
      Username: "SreeCharan",
      Idno: "O210008",
      Email: "o210008@rguktong.ac.in",
      Branch: "CSE",
      Section: "CSE-1",
      RoomNo: "N-108",
      PhoneNumber: "6300625861",
      MotherNumber: "1234567890",
      FatherNumber: "1234567890",
      Pass: "Outpass",
      Reason: "Wanna go home for VinayakaChavithi",
      issuedBy: "issued by Dean",
      FromTime: "20-10-2024",
      ToTime: "22-08-2024",      isExpired : false
    },
    {
      Username: "SreeCharan(0)",
      Idno: "O210008",
      Email: "o210008@rguktong.ac.in",
      Branch: "CSE",
      Section: "CSE-1",
      RoomNo: "N-108",
      PhoneNumber: "6300625861",
      MotherNumber: "1234567890",
      FatherNumber: "1234567890",
      Pass: "Outpass",
      Reason: "Wanna go home for VinayakaChavithi",
      FromTime: "20-10-2024",
      ToTime: "22-08-2024",      isExpired :true,
      issuedBy: "issued by Dean",
    },
  ],
});

export const outpassClick = atom({
  key: "outpassClick",
  default: false,
});

export const outtingClick = atom({
  key: "outingClick",
  default: false,
});

export const AuthKey = atom({
  key: 'AuthKey',
  default: {
    token: '',
    link: '',
    token_name : ''
  }
})