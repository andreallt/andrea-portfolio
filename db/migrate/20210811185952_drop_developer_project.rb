class DropDeveloperProject < ActiveRecord::Migration[6.1]
  def change
    drop_table :developer_projects
  end
end
