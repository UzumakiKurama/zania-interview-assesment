type Tcontent = string | string[] | number | undefined;

interface TComment {
    id : number,
    content : Tcontent,
    votes : number,
    timestamp : string,
    replies : TComment[]
  }

export default TComment;

  