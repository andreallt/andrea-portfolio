class DeveloperProjectController < ApplicationController
  before_action :authorize_request, only: [:update, :create, :destroy]
  before_action :set_developer_projects, only: [:show, :update, :destroy]

  # GET /admins
  def index
    @developer_project = DeveloperProject.all

    render json: @developer_project
  end

  # GET /admins/1
  def show
    render json: @developer_project
  end

  # POST /admins
  def create
    @developer_project = DeveloperProject.new(developer_project_params)

    if @developer_project.save
      render json: @developer_project, status: :created, location: @developer_project
    else
      render json: @developer_project.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /admins/1
  def update
    if @developer_project.update(developer_projects_params)
      render json: @developer_project
    else
      render json: @developer_project.errors, status: :unprocessable_entity
    end
  end

  # DELETE /admins/1
  def destroy
    @developer_project.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_developer_project
      @developer_project = DeveloperProject.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def developer_project_params
      params.require(:developer_project).permit(:name, :email, :image_1, :image_2, :image_3,  :e_url, :detail, :category, :admin_id)
    end

end
end
