class CreateSpaceImages < ActiveRecord::Migration[6.1]
  def change
    create_table :space_images do |t|
      t.string :guid, null: false
      t.string :title, null: false, default: ''
      t.text :description, null: false, default: ''
      t.datetime :publication_date, null: false
      t.string :image_url, null: false, default: ''
      t.string :link, null: false, default: ''

      t.timestamps
    end

    add_index :space_images, :guid, unique: true
  end
end
