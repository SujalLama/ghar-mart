import React from 'react'
import './CategoryHeader.css'

const categories = ['bangalow', 'land', 'flats', 'office'];

const CategoryHeader = ({category, setCategory, setPageNumber}) => {
    function changeCategory (name) {
        setCategory(name);
        setPageNumber(0);
    }

    return (
        <>
        <div className='category-nav-wrapper'>
            <h1>Recent Properties on Gharmart</h1>
            <nav className='category-nav'>
                <ul style={{paddingLeft: 0}}>
                    {
                        categories.map(item => {
                            return <li className={`category-nav-item ${category === item && 'active'}`} 
                                    onClick={() => changeCategory(item)} key={item}>{item}</li>
                                        })
                    }
                </ul>
            </nav>
        </div>
        </>
    )
}

export default CategoryHeader
