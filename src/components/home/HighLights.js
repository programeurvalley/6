import React from 'react'
import { HighLightse } from '../../shared/HighLightContent'

/*import { FaCogs } from 'react-icons/fa'
import { IoFlash } from 'react-icons/io5'
import { BsSuitHeartFill } from 'react-icons/bs'
import { BiSmile } from 'react-icons/bi'*/

export default function HighLights() {
    /*const HighLights = [
        {
            id: 0,
            image: <FaCogs size={'6rem'} style={{marginBottom: 20}} />,
            title: "Bootstrap-powered",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aliquid adipisci aspernatur. Soluta quisquam dignissimos earum quasi voluptate. Amet, dignissimos, tenetur vitae dolor quam iusto assumenda hic reprehenderit?"
        },
        {
            id: 1,
            image: <IoFlash size={'6rem'} style={{marginBottom: 20}} />,
            title: "Fat-free",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, commodi, sequi quis ad fugit omnis cumque a libero error nesciunt molestiae repellat quos perferendis numquam quibusdam rerum repellendus laboriosam reprehenderit!"
        },
        {
            id: 2,
            image: <BsSuitHeartFill size={'6rem'} style={{marginBottom: 20}} />,
            title: "Creative Commons",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, vitae, perferendis, perspiciatis nobis voluptate quod illum soluta minima ipsam ratione quia numquam eveniet eum reprehenderit dolorem dicta nesciunt corporis?"
        },
        {
            id: 3,
            image: <BiSmile size={'6rem'} style={{marginBottom: 20}} />,
            title: "Author's support",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, excepturi, maiores, dolorem quasi reprehenderit illo accusamus nulla minima repudiandae quas ducimus reiciendis odio sequi atque temporibus facere corporis eos expedita?"
        }
        
    ]*/

    // HighLights


    const HighLightsList =  HighLightse.map(e => (
        <div key={e.id} className='col-md-3 col-sm-6 highlight'>
            <div className='h-caption'>
                <h4>{e.image} <br/> {e.title}</h4>
            </div>
            <div className='h-body text-center '>
                <p>
                {e.description}
                </p>
            </div>
        </div>
    )) 

    return (
        <div className='container top-space'>
            <h3 className='text-center thin'>Reasons to use this template</h3>

            <div className='row'>
                {HighLightsList}
            </div>
        </div>
    )
}
