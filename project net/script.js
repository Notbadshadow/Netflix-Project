let movies = [

    {
        name: " The Wolvorine",
        poster:"http://blog.karachicorner.com/wp-content/uploads/2013/04/large/TheWolverine+movie+posters.jpg",
        rating:9.3,
        cast:"ryan"
    },
    {
        name:"Game of Thrones",
        poster:"https://images.wallpapersden.com/image/download/got-2019-artwork_64389_3600x5400.jpg",
        rating:9.5,
        cast:"emily clerk"
    },
    {
        name:"House of Dragon",
        poster:"http://static.tvmaze.com/uploads/images/original_untouched/217/544951.jpg",
        rating:9.0,
        cast:"deamon"
    },
    {
        name:"Lord of the Rings",
        poster:"https://image.tmdb.org/t/p/original/uexxR7Kw1qYbZk0RYaF9Rx5ykbj.jpg",
        rating:9.5,
        cast:"witcher"
    },
    {
        name:"Interstellar",
        poster:"https://1.bp.blogspot.com/-l7aTAUwMI58/X6O7G6yslfI/AAAAAAAAAHM/BRXfZCuEU6caMvMhFZznB9VhFOwLQKGUQCLcBGAsYHQ/s1697/111c5c9ad99661af2d80e38948cf29d8.jpg",
        rating:9.8,
        cast:"nolan"
    },
    {
        name:"Batman vs Superman",
        poster:"https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        rating:8.5,
        cast:"ben anflek"
    },
    {
        name:"shawshank redemption",
        poster:"https://www.themoviedb.org/t/p/original/xSnM4ahmz692msbMTBsfBWHvR3M.jpg",
        rating:9.9,
        cast:"roah"
    },
    {
        name:"Jersey",
        poster:"https://moviegalleri.net/wp-content/gallery/jersey-movie-posters-hd/jersey-movie-posters-hd-nani-shraddha-srinath-1195ba9.jpg",
        rating:9.2,
        cast:"nani"
    },
    {
        name:"12th Fail",
        poster:"https://assets.gadgets360cdn.com/pricee/assets/product/202308/12th_Fail_poster1_1691753464.jpg",
        rating:9.2,
        cast:"rest off"
    },
    {
        name:"Salaar",
        poster:"https://dotmovie4u.com/wp-content/uploads/2024/01/Salaar-Part-1.jpg",
        rating:8.5,
        cast:"prabhas"
    },
    {
        name:"Charlie 777",
        poster:"https://assets.gadgets360cdn.com/pricee/assets/product/202205/777-Charlie-poster_1653245631.jpg",
        rating:9.3,
        cast:"doggo"
    },
    {
        name:"300",
        poster:"https://usercontent2.hubstatic.com/12984815_f520.jpg",
        rating:9.1,
        cast:"zack synder"
    },

]


function searchMovie()
{
     let movieName = document.getElementById('search').value;

     if(movieName!=="")
     {
        let result = movies.filter(function(movie)

               {
                   return movie.name.toUpperCase().includes(movieName.toUpperCase())
               })
        
        displayMovies(result);     


     }

     else
     {
        displayMovies(movies);
     }

}

// [LONG METHOD - USE]


// function displayMovies()
// {
    // let movie = document.createElement("div");
    // movie.classList.add("movies");

    // let overlay = document.createElement("div");
    // overlay.classList.add("overlay");

    // movie.appendChild(overlay)

    // console.log(movie);
// }

// displayMovies();


function displayMovies(data)
{

    document.getElementById("movies").innerHTML="";

    let htmlString = ``;




   for(let i=0;i<data.length;i++)
   {
       htmlString=htmlString+`
       <div class="movie">
           <div class="overlay">

            <div class="video">

            </div>

            <div class="details">

                <h1>${data[i].name}</h1>
                <h2>IMDB : ${data[i].rating}</h2>
                <P>${data[i].cast}</P>

            </div>

        </div>
        <img class="poster" src="${data[i].poster}" alt="">
    </div> 
       `


   }

    console.log(htmlString);


    document.getElementById("movies").innerHTML=innerHTML=htmlString;



}

displayMovies(movies);

