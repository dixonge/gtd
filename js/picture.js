
module.exports = (url, alt = "Missing alt text") => {
    return `<picture>
    <source srcset="https://res.cloudinary.com/donblanco/image/upload/f_auto,q_auto,w_320/gtd/${url}" alt="${alt}" media="(max-width: 320px)">
    <source srcset="https://res.cloudinary.com/donblanco/image/upload/f_auto,q_auto,w_375/gtd/${url}" alt="${alt}" media="(max-width: 375px)">
    <source srcset="https://res.cloudinary.com/donblanco/image/upload/f_auto,q_auto,w_414/gtd/${url}" alt="${alt}" media="(max-width: 414px)">
    <source srcset="https://res.cloudinary.com/donblanco/image/upload/f_auto,q_auto,w_756/gtd/${url}" alt="${alt}" media="(min-width: 755px)">
  </picture>`;
  };