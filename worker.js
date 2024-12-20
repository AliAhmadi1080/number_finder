self.onmessage = function (e) {
    const { colCount, totalNumbers } = e.data;
    const rows = [];
    
    for (let i = 0; i < Math.ceil(totalNumbers / colCount); i++) {
      const row = [];
      for (let j = 0; j < colCount; j++) {
        const number = i * colCount + j + 1;
        if (number > totalNumbers) break;
        row.push(number);
      }
      rows.push(row);
    }
  
    // ارسال داده‌ها به Thread اصلی
    postMessage(rows);
  };
  