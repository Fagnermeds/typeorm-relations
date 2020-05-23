import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddColumnsInTableOrders1590113445837
  implements MigrationInterface {
  private columns: TableColumn[] = [];

  public async up(queryRunner: QueryRunner): Promise<void> {
    this.columns.push(
      new TableColumn({
        name: 'created_at',
        type: 'timestamp',
        default: 'now()',
      }),
      new TableColumn({
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()',
      }),
    );

    await queryRunner.addColumns('orders', this.columns);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns('orders', this.columns);
  }
}
