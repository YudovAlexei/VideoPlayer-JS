/**
 * @class CatalogCollectionModel
 * @package Models
 */

class CatalogCollectionModel extends BaseModel {
  
  /**
   * @var Array<CatalogModel>
   */
  _collection;

  /**
   * @returns Array<CatalogModel>
   */
  get collection() {
    return this._collection;
  }

  /**
   * @param Array<Object>
   */
  set collection(collection) {
    this._collection = this.buildFromArray(collection);
  }

  constructor(array) {
    super();

    this.collection = array;
  }

  /**
   * @param Array<Object>
   * @return Array<CatalogModel>
   */
  buildFromArray(array = []) {
    let res = [];

    array.forEach(catalogObject => {
      res.push(
        (new CatalogModel).fromObject(catalogObject)
      );
    });

    return res;
  }

  /**
   * @param String property
   * @param String value
   * @return CatalogModel|Boolean
   */
  getBy(property, value) {
    let result = false;

    this.collection.map(item => {
      if(item[property] == value) {
        result = item;
      }
    })

    return result;
  }
}