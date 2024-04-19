import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {

    const [data, changeData] = useState(
        [
            {"link": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg" },
            {"link": "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2022-02-Air-Fryer-Roasted-Potatoes%2FIMG_6850" },
            {"link": "https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg" },
            {"link": "https://joyfoodsunshine.com/wp-content/uploads/2022/07/best-omelette-recipe-1.jpg" },
            {"link": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/meatball-lasagne-e64e936.jpg" },
            {"link": "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/08/chole-recipe.jpg" },
            {"link": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/10/vada-pav-recipe-500x500.jpg" },
            {"link": "https://www.seriouseats.com/thmb/HCnqq0O2npAXUoH7_1FdgtZQl0M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/pan-roasted-chicken-vegetables-dijon-jus-recipe-hero-02_1-c3e427250efe40259dc8fab9ff66ea74.JPG" },
            {"link": "https://asset.slimmingworld.co.uk/content/media/19342/sausage-kedgeree-food-range_sw_recipe.jpg" },
            {"link": "https://images.immediate.co.uk/production/volatile/sites/30/2023/01/Ginger-chicken-udon-noodles-82fd935.jpg?quality=90&resize=440,400" },
            {"link": "https://c.ndtvimg.com/2022-03/j5jbs6g_khichdi_625x300_25_March_22.jpg?im=FeatureCrop,algorithm=dnn,width=384,height=384" },
            {"link": "https://www.seriouseats.com/thmb/YTLDXO5StrBo2ZIyvFFkOfXMYgc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__02__20200218-butter-chicken-vicky-wasik-36-0733fcb29f354c4f946b59bc9e719de7.jpg" },
            {"link": "https://assets.epicurious.com/photos/5df7c9efa9f50600094dffed/1:1/w_3137,h_3137,c_limit/COOK90_ButterPaneer_RECIPE_V2_121119_288.jpg" },
            {"link": "https://img.buzzfeed.com/buzzfeed-static/static/2022-03/5/0/asset/6201713e5c7e/sub-buzz-1009-1646440684-8.jpg" },
            {"link": "https://food.fnr.sndimg.com/content/dam/images/food/plus/fullset/2020/04/30/0/FNK_The-Best-Cheddar-And-Herb-Chaffle_H_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1588257306685.jpeg" },

        ]
    )

    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <p class="fs-2">All Recipies</p>

                        <div className="row g-3">


                            {
                                data.map(
                                    (value,index)=>{
                                        return <div class="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card">
                                            <img src={value.link} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                            <a href="#" class="btn btn-primary">Watch Now</a>
                                            </div>
                                        </div>
                                    </div>
        
                                    }
                                )
                            }

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll