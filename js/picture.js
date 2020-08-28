
module.exports = (url, alt = "Missing alt text") => {
    return `
 <img src="https://res.cloudinary.com/donblanco/image/upload/f_auto,q_auto,w_756/gtd/${url}" alt="${alt}" srcset="https://res.cloudinary.com/donblanco/image/upload/f_auto,q_auto,w_320/gtd/${url} 320w, https://res.cloudinary.com/donblanco/image/upload/f_auto,q_auto,w_375/gtd/${url} 375w, https://res.cloudinary.com/donblanco/image/upload/f_auto,q_auto,w_414/gtd/${url} 414w, https://res.cloudinary.com/donblanco/image/upload/f_auto,q_auto,w_756/gtd/${url} 756w" />
 `;
  };