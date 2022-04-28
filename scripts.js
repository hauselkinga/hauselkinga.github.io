$(document).ready(function() {  
    //objects
    let cat1 = {
        photo: 'images/brit.jpg',
        title: 'British Shorthair',
        description: 'The British Shorthair is the pedigreed version of the traditional British domestic cat, with a distinctively stocky body, dense coat, and cute broad face. The most familiar colour variant is the "British Blue", with a solid grey-blue coat, orange eyes, and a medium-sized tail. The breed has also been developed in a wide range of other colours and patterns, including tabby and colourpoint.'
    };
    let cat2 = {
        photo: 'images/munchkin.jpg',
        title: 'Munchkin Cat',
        description: 'The Munchkin cat or Sausage cat is a relatively new breed of cat characterized by its very short legs, which are caused by genetic mutation. The Munchkin is considered to be the original breed of dwarf cat.'
    };
    let cat3 = {
        photo: 'images/persian.jpg',
        title: 'Persian Longhair',
        description: 'The Persian cat is a long-haired breed of cat characterized by its round face and short muzzle. The first documented ancestors of Persian cats were imported into Italy from Persia around 1620.'
    };
    let cat4 = {
        photo: 'images/ragdoll.jpg',
        title: 'Ragdoll',
        description: 'The Ragdoll is a cat breed with a color point coat and blue eyes. Its morphology is large and muscular and its coat is silky soft and semi-longhair. Ragdolls were developed by American breeder Ann Baker in the 1960s. They are best known for their docile and placid temperament and affectionate nature. The name Ragdoll is derived from the tendency of individuals from the original breeding stock to go limp and relaxed when picked up.'
    };
    let cat5 = {
        photo: 'images/siamese.jpg',
        title: 'Siamese Cat',
        description: 'The Siamese cat is one of the first distinctly recognized breeds of Asian cat. Derived from the Wichianmat landrace, one of several varieties of cat native to Thailand (formerly known as Siam), the original Siamese became one of the most popular breeds in Europe and North America in the 19th century.'
    };
    let cat6 = {
        photo: 'images/toyger.jpg',
        title: 'Toyger',
        description: `The toyger is a breed of domestic cat, the result of breeding domestic shorthaired tabbies (beginning in the 1980s) to make them resemble a "toy tiger", as its striped coat is reminiscent of the tiger's.`
    };

    let photoData = [cat1, cat2, cat3, cat4, cat5, cat6];
    let currentPhoto = 0;

    //loading thumbnails
    photoData.forEach((element, index) => {
        $('.thumbnails').append(
            `<div class="card">
                <p class="hiddenTitle">${element.title}</p>
                <img class="thumbnail" data-index="${index}" src="${element.photo}">
            </div>`
            )
    });

    //loading current photo
    let loadPhoto = (photoNumber) => {
        currentPhoto = photoNumber;
        $('#currentImage').attr('src', photoData[photoNumber].photo);
        $('#photoTitle').text(photoData[photoNumber].title);
        $('#photoDescription').text(photoData[photoNumber].description);

        $('.thumbnail').each(function (index) {
            if (index == photoNumber) {
                $('.activeThumbnail').removeClass('activeThumbnail');
                $(this).closest('div').addClass('activeThumbnail');
            }
        });
        console.log(currentPhoto)
    }

    //initial photo
    loadPhoto(currentPhoto);

    //adding extra CSS


    //click event for thumbnails
    $('.thumbnail').click((event) =>{
        let indexClicked = $(event.target).attr('data-index');
        loadPhoto(indexClicked);
    });

    //arrows
    $('#right-arrow').click(() => {
        currentPhoto++;
        if (currentPhoto > 5) {
            currentPhoto = 0;
        }
        loadPhoto(currentPhoto);
    })
    $('#left-arrow').click(() => {
        currentPhoto--;
        if (currentPhoto < 0) {
            currentPhoto = 5;
        }
        loadPhoto(currentPhoto);
      })

    //hidden title
    $('.thumbnail').each(function (index) {
        $(this).hover(function() {
            $(this).siblings().css('display', 'block');
        }, function() {
            $(this).siblings().css('display', 'none');
        }
        );
    });
});


