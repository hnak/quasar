export default class Evaluation {

  public id: string;
  public customerId: string;
  public customerName: string;
  public evaluation: number;
  public comment: string;
  public commentDate: Date;

  constructor($id: string, $customerId: string, $customerName: string, $evaluation: number, $comment: string, $commentDate: Date) {
    this.id = $id;
    this.customerId = $customerId;
    this.customerName = $customerName;
    this.evaluation = $evaluation;
    this.comment = $comment;
    this.commentDate = $commentDate;
  }

}
