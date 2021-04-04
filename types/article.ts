type Markdown = string
type Uml = string

export interface Article {
  id: string
  title: string
  content: Markdown
  diagram: Uml
}
