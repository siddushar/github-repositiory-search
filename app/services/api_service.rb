class ApiService
  include HTTParty
  base_uri "https://api.github.com/"

  def initialize(term)
    @term = term
  end

  def call
    repositories
  end

  private

  def repositories
    return [] if @term.nil?
    response = self.class.get("/search/repositories", query: { q: @term })
    puts "================ #{response["items"]}"
    response["items"].map { |repo| {id: repo['id'], name: repo['name']}} 
  end

  
end