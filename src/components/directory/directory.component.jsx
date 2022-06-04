import './directory.styles.scss'
import CategoryItem from '../category-item/category-item.component'

const Directory = (props) => {
    const { categories} = props
    return (
        <div className="categories-container">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            )
            )}
        </div>
    )
}

export default Directory;