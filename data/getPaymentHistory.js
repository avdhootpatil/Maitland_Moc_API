module.exports = () => {
  return {
    statusCode: 200,
    errorMessage: null,
    source: "Products",
    searchTerm: "",
    resultCount: 1,
    contents: [
      {
        paymentId: 1,
        paymentMode: "UPI",
        payableAmount: 1000,
        date: "2024-07-26T14:12:29.1538444",
        amountPaid: 1000,
        transactionId: 1,
        orderNumber: "ABC123",
        paymentStatus: "initiated",
        acknowledgement: "",
      },
      {
        paymentId: 2,
        paymentMode: "Credit Card",
        payableAmount: 1500,
        date: "2024-07-26T14:12:29.1538444",
        amountPaid: 1500,
        transactionId: 2,
        orderNumber: "DEF456",
        paymentStatus: "completed",
        acknowledgement: "Receipt123",
      },
      {
        paymentId: 3,
        paymentMode: "Debit Card",
        payableAmount: 2000,
        date: "2024-07-26T14:12:29.1538444",
        amountPaid: 2000,
        transactionId: 3,
        orderNumber: "GHI789",
        paymentStatus: "failed",
        acknowledgement: "",
      },
      {
        paymentId: 4,
        paymentMode: "Net Banking",
        payableAmount: 2500,
        date: "2024-07-26T14:12:29.1538444",
        amountPaid: 2500,
        transactionId: 4,
        orderNumber: "JKL012",
        paymentStatus: "completed",
        acknowledgement: "Receipt124",
      },
      {
        paymentId: 5,
        paymentMode: "UPI",
        payableAmount: 3000,
        date: "2024-07-26T14:12:29.1538444",
        amountPaid: 3000,
        transactionId: 5,
        orderNumber: "MNO345",
        paymentStatus: "initiated",
        acknowledgement: "",
      },
      {
        paymentId: 6,
        paymentMode: "Credit Card",
        payableAmount: 3500,
        date: "2024-07-26T14:12:29.1538444",
        amountPaid: 3500,
        transactionId: 6,
        orderNumber: "PQR678",
        paymentStatus: "failed",
        acknowledgement: "",
      },
      {
        paymentId: 7,
        paymentMode: "Debit Card",
        payableAmount: 4000,
        date: "2024-07-26T14:12:29.1538444",
        amountPaid: 4000,
        transactionId: 7,
        orderNumber: "STU901",
        paymentStatus: "completed",
        acknowledgement: "Receipt125",
      },
      {
        paymentId: 8,
        paymentMode: "Net Banking",
        payableAmount: 4500,
        date: "2024-07-26T14:12:29.1538444",
        amountPaid: 4500,
        transactionId: 8,
        orderNumber: "VWX234",
        paymentStatus: "initiated",
        acknowledgement: "",
      },
      {
        paymentId: 9,
        paymentMode: "UPI",
        payableAmount: 5000,
        date: "2024-07-26T14:12:29.1538444",
        amountPaid: 5000,
        transactionId: 9,
        orderNumber: "YZA567",
        paymentStatus: "completed",
        acknowledgement: "Receipt126",
      },
      {
        paymentId: 10,
        paymentMode: "Credit Card",
        payableAmount: 5500,
        date: "2024-07-26T14:12:29.1538444",
        amountPaid: 5500,
        transactionId: 10,
        orderNumber: "BCD890",
        paymentStatus: "failed",
        acknowledgement: "",
      },
    ],
    paging: {
      numberOfPages: 10,
      pageNumber: 1,
      recordsPerPage: 50,
      nextPageNumber: 0,
      previousPageNumber: 0,
    },
    sorting: {
      sortName: "id",
      sortDirection: "desc",
    },
  };
};
