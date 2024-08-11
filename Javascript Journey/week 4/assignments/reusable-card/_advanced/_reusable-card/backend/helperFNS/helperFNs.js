const { User, Cards , Admin } = require('../database/db');
const { returnJwt } = require('../jwt/jwt');

async function addCard(title, description, linkedin, twitter, Intrests,username){
    //get { title, description, linkedin, twitter, Intrests} from body
    let newListOfCards = []; 

    const card = await Cards.create({
        Title : title,
        Description : description,
        Intrests : Intrests,
        Linkedin : linkedin,
        Twitter : twitter
    });

    const current_user = await User.findOne(
        {
            Username : username //filter
        }
    )   

    newListOfCards = (current_user.Cards)
    newListOfCards.push(card._id);

    await User.updateOne(
        {
            Username : username //filter
        },
        {
            Cards : newListOfCards
        }
    )  
}

async function getCardDetails(user_state){
    const cardsArray = [];
    for(let i = 0; i < user_state.Cards.length;i++){
        let card = await Cards.findOne({
            _id : user_state.Cards[i]
        })
        if(card == null)
            cardsArray.push('_CARD_DELETED_');
        else
            cardsArray.push(card);
    }
    return cardsArray;
}

async function getUserState(username){
    const user_state = await User.findOne({
        Username : username
    })
    const cardsArray = await getCardDetails(user_state);
    const final_details =     {
        id : user_state._id,
        Username : user_state.Username,
        Cards : cardsArray,
    }
    return final_details;
}

async function deleteCard(cardId,username){
    const current_user = await  User.findOne({
        Username : username
    })

    const current_user_Cards = current_user.Cards;
    let indexOfCard = 1000;
    for(let i = 0; i < current_user_Cards.length;i++){
        if(current_user_Cards[i] == cardId)
            indexOfCard = i;
    }

    if(indexOfCard === 1000){
        return false;
    }
    else{
        current_user_Cards.splice(indexOfCard,1);
        await User.updateOne({
            _id : current_user._id
        },
        {
            Cards : current_user.Cards
        })
    
        await Cards.deleteOne({
            _id : cardId
        })

        return true;
    }
}

async function addAdmin(username,password){

    await Admin.create({
        Username : username,
        Password : password
    })

}


async function editCard(cardId,title, description, linkedin, twitter, intrests){
    await Cards.updateOne(
        {
            _id : cardId
        },
        {
            Title : title,
            Description : description,
            Intrests : intrests,
            Linkedin : linkedin,
            Twitter : twitter
    })
}

async function removeUser(username,user){
    //first remove cards
    for(let i = 0; i < user.Cards.length;i++){
        let cardId = user.Cards[i];
        await Cards.deleteOne({
            _id : cardId
        })
    }
    // remove User
    await User.deleteOne({
        Username : username 
    })
    return 1;
}

module.exports = {
    addCard,
    getCardDetails,
    getUserState,
    deleteCard,
    addAdmin,
    editCard,
    removeUser
}