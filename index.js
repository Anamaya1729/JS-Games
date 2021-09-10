document.addEventListener("DOMContentLoaded",()=>
{
    const cards = [
        {
            name: "kuro",
            img: "Images/kuro.png"
        },
        {
            name: "kuro",
            img: "Images/kuro.png"
        },
        {
            name: "aki",
            img: "Images/aki.png"
        },
        {
            name: "aki",
            img: "Images/aki.png"
        },
        {
            name: "slime",
            img: "Images/slime.png"
        },
        {
            name: "slime",
            img: "Images/slime.png"
        },
        {
            name: "denji",
            img: "Images/denji.png"
        },
        {
            name: "denji",
            img: "Images/denji.png"
        },
        {
            name: "hinata",
            img: "Images/hinata.png"
        },
        {
            name: "hinata",
            img: "Images/hinata.png"
        },
        {
            name: "killua",
            img: "Images/killua.png"
        },
        {
            name: "killua",
            img: "Images/killua.png"
        },
        {
            name: "light",
            img: "Images/light.png"
        },
        {
            name: "light",
            img: "Images/light.png"
        },
        {
            name: "power",
            img: "Images/power.png"
        },
        {
            name: "power",
            img: "Images/power.png"
        }
    ]
    cards.sort(()=> 0.5 - Math.random())

    const grid = document.querySelector(".grid")
    const resultDisplay = document.querySelector("#result")
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    function createBoard()
    {
        for (let i = 0 ; i< cards.length; i++)
        {
            let card = document.createElement("img")
            card.setAttribute("src","Images/back.png")
            card.setAttribute("data-id",i)
            card.setAttribute("style","border: 2px solid black;")
            card.addEventListener("click",flipcard)
            grid.appendChild(card)
        }
    }
    
    //Check for matches 
    function checkForMatch()
    {
        let cards = document.querySelectorAll("img")
        const firstChoiceId = cardsChosenId[0]
        const secondChoiceId = cardsChosenId[1]

        if (firstChoiceId == secondChoiceId)
        {
            cards[firstChoiceId].setAttribute("src","Images/back.png")
            cards[secondChoiceId].setAttribute("src","Images/back.png")
            // alert('You have clicked the same image!')
        }

        else if (cardsChosen[0] === cardsChosen[1])
        {
            // alert("You found a match")
            cards[firstChoiceId].setAttribute("src","Images/white.png")
            cards[secondChoiceId].setAttribute("src","Images/white.png")
            cards[firstChoiceId].removeEventListener("click", flipcard); 
            cards[secondChoiceId].removeEventListener("click", flipcard);
            cardsWon.push(cardsChosen)

        }
        else
        {
            cards[firstChoiceId].setAttribute("src","Images/back.png")
            cards[secondChoiceId].setAttribute("src","Images/back.png")
            // alert("Sorry, try again!")
        }
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cards.length/2)
        {
            resultDisplay.textContent = "Congratulaitons! You found them all!!"
        }
        cardsChosen = []
        cardsChosenId = []
    }
    
    //Flip your card
    function flipcard()
    {
        let cardId = this.getAttribute("data-id")
        cardsChosen.push(cards[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute("src",cards[cardId].img)
        if (cardsChosen.length === 2)
        {
            setTimeout(checkForMatch,500)
        }

    }
    createBoard()
})