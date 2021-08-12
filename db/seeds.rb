# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

DesignProject.destroy_all
DesignProject.destroy_all
Admin.destroy_all


andrea = Admin.create(name: "andrea", email:'andrea@portfolio.com', password_digest:"andrea123portfolio")

DesignProject.create(name: "We All Bleed", 
                      image_1: "https://imgur.com/Md96Y5A", 
                      image_2: "https://imgur.com/gOGwYNc",
                      image_3: "https://imgur.com/kMIjWI3",
                      e_url: "https://www.youtube.com/embed/lmDHVKdAUXo",
                      detail: "WE ALL BLEED is one of the runner-ups for the Sunhak Peace Prize motion graphic contest. The piece addresses Female Genital Mutilation and Period taboos.
                      Period taboos still permeate modern society and allow the lack of menstrual hygiene products in low-income communities, affecting female education and daily activities.",
                      category: "Animation",
                      admin: andrea)
                      # <iframe width="560" height="315" src="https://www.youtube.com/embed/lmDHVKdAUXo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


DesignProject.create(name: "B+H", 
                      image_1: "https://imgur.com/6WG6wpm", 
                      image_2: "https://imgur.com/VX2DZRj",
                      image_3: "https://imgur.com/hlNNSpW",
                      e_url: "https://docs.google.com/presentation/d/e/2PACX-1vTrkK1glb946asA1H7EelAkflGbCRMVyxxWByis2zA8XPYdJsrPWIPxMXY_H78OaoBSEQQqZS1aY0Fx/embed?start=true&loop=true&delayms=3000",
                      detail:"B+H Rebranding aims to reintroduce the brand to its customers while appealing to a new younger audience. The redesigned dynamic logo embodies B+H's down to earth yet expert personality, making B+H a competitive brand within the photo a video market. B+H Photo Video is an American photo and video equipment retailer founded in 1973, based in Manhattan, New York City. B+H conducts business through online e-commerce consumer sales, business to business sales, and its one retail location.",
                      category: "Rebranding",
                      admin: andrea)   
                      # e_url: "<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTrkK1glb946asA1H7EelAkflGbCRMVyxxWByis2zA8XPYdJsrPWIPxMXY_H78OaoBSEQQqZS1aY0Fx/embed?start=true&loop=true&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>",


DesignProject.create(name: "Amateur Hour is Over", 
                      image_1: "https://imgur.com/QlBmOPZ", 
                      image_2: "https://imgur.com/o8UWjLe",
                      image_3: "https://imgur.com/zMd9Tge",
                      e_url: "",
                      detail:"The challenge consisted of a single poster for the 2019 KIA Stinger with the tagline --fuel by youth. Amateur hour is over concept was born on KIA's belief in a young automobile brand that does not sacrifice price over quality and looks. The KIA Stinger represents the new adult. The one that does not settle for the conventional. He keeps on living and exploring, not losing himself in the status quo. KIA Stinger is for a new generation of professionals.",
                      category: "Advrtising",
                      admin: andrea) 


DeveloperProject.create(name: "Al Chile",
                        github_url:"https://github.com/andreallt/al-chile",
                        web_url:"https://al-chile.netlify.app/",
                        image_url:"https://imgur.com/Yb6CjGn",
                        library:"JavaScript / CSS / HTML / AirTable / React ",
                        detail:"Al Chile (To Pepper) is an app about all things peppers and hot sauce. Want to learn about all the different types of peppers? What makes them spicy and, what hot sauces have that specific pepper? Just use the app and collaborate to add more hot sauces from around the world.",
                        admin: andrea)

DeveloperProject.create(name: "Community Table",
                        github_url: "https://github.com/robisonJohn/Community-Table",
                        web_url:"https://community-table.netlify.app/",
                        image_url:"https://imgur.com/qLHP6vF",
                        library:"JavaScript / CSS / Bootstrap / HTML / React  / MongoDB / Mongoose / Express",
                        detail:"This is an application that integrates information between grocery stores and community organizations for at-risk food discovery.",
                        admin: andrea)

DeveloperProject.create(name: "Should I Makeup?",
                        github_url:"https://github.com/andreallt/Should-I-Makeup",
                        web_url:"https://should-i-makeup.netlify.app/",
                        image_url:"https://imgur.com/UOvlbHx",
                        library:"JavaScript / CSS / HTML ",
                        detail:"App wor HTTP request to an external API for inquiry on a specific makeup product",
                        admin: andrea)


                    pp "Created Content!"
