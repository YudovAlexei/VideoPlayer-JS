/**
 * @class SourcesCollectionModel
 * @package Models
 */

class SourcesCollectionModel extends BaseModel {

  /**
   * @var Array<SourceModel>
   */
  _collection;

  /**
   * @returns Array<SourceModel>
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
   * @return Array<SourceModel>
   */
  buildFromArray(array = []) {
    let res = [];

    array.forEach(sourceObject => {
      res.push(
        (new SourceModel).fromObject(sourceObject)
      );
    });

    return res;
  }

}