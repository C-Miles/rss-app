namespace :nasa do
  desc "Fetch and store NASA's Image of the Day RSS feed"
  task fetch_images: :environment do
    require 'rss'
    require 'open-uri'

    url = 'https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss'

    puts "Fetching NASA's Image of the Day RSS feed..."
    puts "URL: #{url}"

    begin
      URI.open(url) do |rss|
        feed = RSS::Parser.parse(rss)
        puts "Total Items: #{feed.items.size}"
        puts "----------------------------------------"

        feed.items.each_with_index do |item, index|
          guid = item.guid&.content || item.link || SecureRandom.uuid
          title = item.title&.strip
          description = item.description&.strip
          publication_date = item.pubDate
          image_url = item.enclosure&.url&.strip
          link = item.link&.strip

          if title.blank? || publication_date.nil? || image_url.blank?
            puts "Skipping Item #{index + 1} due to missing essential data."
            next
          end

          space_image = SpaceImage.find_or_initialize_by(guid: guid)
          space_image.assign_attributes(
            title: title,
            description: description || '',
            publication_date: publication_date,
            image_url: image_url,
            link: link || ''
          )

          if space_image.save
            puts "Saved Item #{index + 1}: #{title}"
          else
            puts "Failed to save Item #{index + 1}: #{title}"
            puts space_image.errors.full_messages
          end
        end
      end
    rescue OpenURI::HTTPError => e
      puts "An error occurred while fetching the RSS feed: #{e.message}"
    rescue RSS::InvalidRSSError => e
      puts "An error occurred while parsing the RSS feed: #{e.message}"
    end
  end
end
