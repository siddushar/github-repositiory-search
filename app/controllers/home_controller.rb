class HomeController < ApplicationController
  def index
  	@repositories = ApiService.new(params[:search]).call
  end
end
