import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AlterColumnPriceInTableProducts1590158040708
  implements MigrationInterface {
  private column: TableColumn = new TableColumn();

  public async up(queryRunner: QueryRunner): Promise<void> {
    this.column = new TableColumn({
      name: 'price',
      type: 'decimal(8,2)',
    });

    await queryRunner.changeColumn('products', 'price', this.column);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    this.column = new TableColumn({
      name: 'price',
      type: 'decimal',
    });

    await queryRunner.changeColumn('products', 'price', this.column);
  }
}
