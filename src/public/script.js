'use strict'


function delete_files (value) {

    console.log('Из текущей директории был удален файл '+ value );
    let va =  document.getElementById(value)
    va.remove();
    $.ajax({
      url: "/delete",   //путь
      type: "GET",    //Метод отправки
      data:{          //передается ключ значение после ?
        id:value
      }
    });

}

function add_files () {

    let result = prompt('Введите название файла','');
    console.log('В текущую директорию добавлен новый файл');
    console.log(result);



    $.ajax({
      url: "/add",   //путь
      type: "GET",  //Метод отправки
      data:{        //передается ключ значение после ?
        val:result
      }
    });
}
