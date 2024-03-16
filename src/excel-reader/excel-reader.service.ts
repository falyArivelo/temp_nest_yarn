import { Injectable } from '@nestjs/common';
// import { Workbook } from 'exceljs';
import * as ExcelJS from 'exceljs';

@Injectable()
export class ExcelReaderService {
  // async readExcel(filePath: string): Promise<any[]> {
  //     const workbook = new Workbook();
  //     await workbook.xlsx.readFile(filePath);
  //     const worksheet = workbook.getWorksheet(1); // Récupère la première feuille de calcul
  //     const data = [];

  //     worksheet.eachRow((row, rowNumber) => {
  //         const rowData = {};
  //         worksheet.columns.forEach(column => {
  //             rowData[column.key] = row.getCell(column.key).value;
  //         });
  //         data.push(rowData);
  //     });

  //     return data;
  // }
  async lireFichierExcel(cheminFichier: string): Promise<any> {
    const workbook = new ExcelJS.Workbook();

    try {
      await workbook.xlsx.readFile(cheminFichier);

      const worksheet = workbook.getWorksheet(1); // Obtenez la première feuille du classeur

      const columnHeaders = [];
      const firstRow = worksheet.getRow(1);
      firstRow.eachCell((cell) => {
        columnHeaders.push(cell.value);
      });

      const contenu = [];

      worksheet.eachRow((row, rowNumber) => {
        if (rowNumber !== 1) { // Ignorer la première ligne (en-têtes de colonnes)
          const rowData = {};
          row.eachCell((cell, colNumber) => {
            rowData[columnHeaders[colNumber - 1]] = cell.value; // Utilisez les noms de colonnes comme clés
          });
          contenu.push(rowData);
        }
      });

      return { columnHeaders, contenu };
    } catch (error) {
      console.error('Erreur lors de la lecture du fichier Excel', error);
      throw new Error('Erreur lors de la lecture du fichier Excel');
    }
  }


}
