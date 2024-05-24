//wwwroot/script.jsをインポートします。
// セルが編集モードに入るときに発生します
igRegisterScript("WebGridCellEditEnter", (event) => {
    event.detail.cancel = !event.detail.rowData.Editabile;
}, false);

// 特定の列自体の編集を制限すると下記の様になります
//igRegisterScript("WebGridCellEditEnter", (event) => {
//    // 編集しようとしている列のフィールド名を取得
//    const editingField = event.detail.column.field;
//    // 特定の列（ここでは 'JobTitle'列）の編集を制限
//    if (editingField === 'JobTitle') {
//        event.detail.cancel = !event.detail.rowData.Editabile;
//    }
//}, false);