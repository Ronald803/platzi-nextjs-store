interface CategoryProps {
    params: {
        category: string
    }
}

function Category(props:CategoryProps) {
    console.log(props.params.category)
  return (
    <div>Category</div>
  )
}

export default Category