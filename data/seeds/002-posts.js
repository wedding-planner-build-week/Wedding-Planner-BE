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
    },
    {
      couple_name: "Sam & Alice's Wedding",
      wedding_theme: "Country",
      wedding_date: "2018-02-20",
      item_photo:
        "https://images.unsplash.com/photo-1475714622877-641e013c6096?ixlib=rb-1.2.1&auto=format&fit=crop&w=1346&q=80",
      wedding_location: "Colonie, NY",
      wedding_photographer: "Tim Horton",
      user_id: 2
    },
    {
      couple_name: "Kate & Kristen's Wedding",
      wedding_theme: "Rustic",
      wedding_date: "2018-06-04",
      item_photo:
        "https://images.unsplash.com/photo-1482482097755-0b595893ba63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      wedding_location: "Seattle, WA",
      wedding_photographer: "John Stamos",
      user_id: 2
    },
    {
      couple_name: "Josh & Amanda's Wedding",
      wedding_theme: "Modern",
      wedding_date: "2016-02-18",
      item_photo:
        "https://images.unsplash.com/photo-1527578400122-85bbbb91d53c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      wedding_location: "Los Angelos, CA",
      wedding_photographer: "Linda Selby",
      user_id: 2
    },
    {
      couple_name: "Daniel & Lucy's Wedding",
      wedding_theme: "Country",
      wedding_date: "2016-10-29",
      item_photo:
        "https://images.unsplash.com/photo-1509610973147-232dfea52a97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      wedding_location: "Denver, CO",
      wedding_photographer: "Jameson Armstrong",
      user_id: 2
    },
    {
      couple_name: "Cynthia & Christina's Wedding",
      wedding_theme: "Modern",
      wedding_date: "2017-03-20",
      item_photo:
        "https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      wedding_location: "Manhattan, NY",
      wedding_photographer: "Joshua Samus",
      user_id: 2
    },
    {
      couple_name: "Sumiko & Ryosuke's Wedding",
      wedding_theme: "Modern",
      wedding_date: "2018-07-23",
      item_photo:
        "https://images.unsplash.com/photo-1522333323-32663f141b57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
      wedding_location: "Boston, MA",
      wedding_photographer: "Candace Lindsale",
      user_id: 2
    }
  ]);
};
