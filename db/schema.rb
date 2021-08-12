# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_08_11_190126) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admins", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "design_projects", force: :cascade do |t|
    t.string "name"
    t.string "image_1"
    t.string "image_2"
    t.string "image_3"
    t.string "e_url"
    t.string "detail"
    t.string "category"
    t.bigint "admin_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["admin_id"], name: "index_design_projects_on_admin_id"
  end

  create_table "developer_projects", force: :cascade do |t|
    t.string "name"
    t.string "github_url"
    t.string "web_url"
    t.string "image_url"
    t.string "library"
    t.string "detail"
    t.bigint "admin_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["admin_id"], name: "index_developer_projects_on_admin_id"
  end

  add_foreign_key "design_projects", "admins"
  add_foreign_key "developer_projects", "admins"
end
