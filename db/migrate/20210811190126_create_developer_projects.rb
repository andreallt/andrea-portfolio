class CreateDeveloperProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :developer_projects do |t|
      t.string :name
      t.string :github_url
      t.string :web_url
      t.string :image_url
      t.string :library
      t.string :detail
      t.references :admin, null: false, foreign_key: true

      t.timestamps
    end
  end
end
