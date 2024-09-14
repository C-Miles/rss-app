ActiveRecord::Schema.define(version: 2024_09_14_174315) do
  enable_extension "plpgsql"

  create_table "space_images", force: :cascade do |t|
    t.string "guid", null: false
    t.string "title", default: "", null: false
    t.text "description", default: "", null: false
    t.datetime "publication_date", null: false
    t.string "image_url", default: "", null: false
    t.string "link", default: "", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["guid"], name: "index_space_images_on_guid", unique: true
  end

end
