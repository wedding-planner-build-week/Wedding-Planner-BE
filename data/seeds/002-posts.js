exports.seed = function(knex, Promise) {
  return knex("posts").insert([
    {
      couple_name: "Erica & Andrew's Wedding",
      wedding_theme: "Rustic",
      wedding_date: "2019-03-30",
      item_photo:
        "https://images.unsplash.com/photo-1510076857177-7470076d4098?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80",
      wedding_location: "Boston, Massachusetts",
      wedding_photographer: "Daniel Westbrook",
      user_id: 2
    },
    {
      couple_name: "Eric & Samantha's Wedding",
      wedding_theme: "Beach",
      wedding_date: "2019-04-20",
      item_photo:
        "https://images.unsplash.com/photo-1546193430-c2d207739ed7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1978&q=80",
      wedding_location: "San Diego, CA",
      wedding_photographer: "Katherine Vogel",
      user_id: 2
    },
    {
      couple_name: "Mitsuki & Takao's Wedding",
      wedding_theme: "Modern",
      wedding_date: "2019-01-10",
      item_photo:
        "https://images.unsplash.com/photo-1522057384400-681b421cfebc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      wedding_location: "Austin, TX",
      wedding_photographer: "Lucy Hale",
      user_id: 2
    }
  ]);
};
