class CreateDesignProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :design_projects do |t|
      t.string :name
      t.string :image_1
      t.string :image_2
      t.string :image_3
      t.string :e_url
      t.string :detail
      t.string :category
      t.references :admin, null: false, foreign_key: true

      t.timestamps
    end
  end
end
