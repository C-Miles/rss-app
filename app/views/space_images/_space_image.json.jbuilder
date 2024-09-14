json.cache! ['v1', space_image] do
  json.extract! space_image,
    :id,
    :title,
    :description,
    :image_url,
    :publication_date,
    :link
end
