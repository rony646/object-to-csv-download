export function objectToCsv(data: Array<any>) {
    const csvRows = []
    // getting the headers
    const headers = Object.keys(data[0])
    csvRows.push(headers.join(','));
  
    // adding other rows
    for(const row of data) {
      const values = headers.map(header => {
        return `"${row[header]}"`;
      })
      csvRows.push(values.join(','))
    }
  
      const csv = ['sep=,', ...csvRows]
      console.log(csv.join('\n'));
      return csv.join('\n');
};

export function download(csv: string) {
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob);
    return url;
};