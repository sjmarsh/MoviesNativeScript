export class CategorySelection{
  public category: string;
  public isSelected: boolean;

  public constructor(_category: string, _isSelected: boolean){
    this.category = _category;
    this.isSelected = _isSelected;
  }
}