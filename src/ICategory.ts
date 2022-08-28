// TODO ICategoryPreview { title: string, items: Array<IItems> }
//  ICategory extends ICategoryPreview { ...ICategory, id: number, imageUrl: string }


export interface ICategory {
  title: string
  id?: number
  imageUrl?: string
  items?: Array<IItem>
}

export interface IItem {
  id: number
  imageUrl: string
  name: string
  price: number
}